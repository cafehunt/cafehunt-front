import { FC, useState, ChangeEvent } from 'react';
import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { FlexContainer } from '../../components/FlexContainer';
import avatar from '../../assets/icons/avatar.png';
import pencilIcon from '../../assets/icons/pencil.png';
import moreIcon from '../../assets/icons/more.png';
import deleteIcon from '../../assets/icons/delete.png';
import logoutIcon from '../../assets/icons/log-out.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AccountCard } from '../../components/AccountCard';
import {
  AccountStyled,
  AccountWrapper,
  AccountPagination,
  AvatarCircle,
  AvatarImage,
  BookingsWrapper,
  Container,
  DeleteImage,
  LogoutImage,
  MoreImage,
  Option,
  OptionsContainer,
  PencilImage,
  StyledProfile,
  StyledTitle,
  Tab,
  TabsWrapper,
  AccountInput,
} from './Account.styled';
import { useUserData } from '../../hooks/useUserData';
import { useOrdersList } from '../../hooks/useOrdersList';
import { Loader } from '../../components/Loader';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Account: FC = () => {
  const [page, setPage] = useState(1);
  const [showOptions, setShowOptions] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('bookings');
  const token = localStorage.getItem('accessToken');
  const [data] = useUserData(token || '');
  const [ordersData, ordersStatus] = useOrdersList(token || '', page);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleIconClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDeleteAccount = () => {
    // Handle delete account logic here
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  console.log('Orders:', ordersData.items);

  if (ordersStatus === 'loading') {
    return <Loader />;
  }

  return (
    <AccountStyled>
      <AccountWrapper>
        <Header />
        <FlexContainer fd="column" gap="40px">
          <BackButton />
          <StyledTitle mb="24px">My profile</StyledTitle>
        </FlexContainer>
        <StyledProfile>
          <FlexContainer gap="24px">
            <FlexContainer>
              <AvatarCircle>
                <AvatarImage src={avatar} alt="Avatar" />
              </AvatarCircle>
            </FlexContainer>
            <FlexContainer fd="column" width="100%" gap="14px">
              <FlexContainer ai="center" jc="space-between" width="100%">
                <FlexContainer ai="center">
                  <StyledTitle fs="40px" fw="700" lnh="120%">
                    {data.first_name} {data.last_name}
                  </StyledTitle>
                  <PencilImage src={pencilIcon} alt="Pencil" />
                </FlexContainer>
                <Container>
                  <MoreImage
                    src={moreIcon}
                    alt="more"
                    onClick={handleIconClick}
                  />
                  {showOptions && (
                    <OptionsContainer>
                      <Option onClick={handleDeleteAccount}>
                        <DeleteImage src={deleteIcon} alt="Delete" />
                        Delete account
                      </Option>
                      <Option onClick={handleLogout}>
                        <LogoutImage src={logoutIcon} alt="Logout" />
                        Log out
                      </Option>
                    </OptionsContainer>
                  )}
                </Container>
              </FlexContainer>
              <FlexContainer gap="92px" width="100%" ai="flex-end">
                <FlexContainer gap="24px" width="100%">
                  <AccountInput>
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      placeholder={data.email}
                    />
                  </AccountInput>
                  <AccountInput>
                    <Input
                      type="text"
                      label="Phone"
                      name="phone"
                      placeholder={data.phone_number || '050 123 45 67'}
                    />
                  </AccountInput>
                </FlexContainer>
                <Button width="168px" vp="13px">
                  Save
                </Button>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </StyledProfile>
        <TabsWrapper>
          <Tab
            active={activeTab === 'bookings'}
            onClick={() => handleTabClick('bookings')}
            leftRadius
          >
            My bookings
          </Tab>
          <Tab
            active={activeTab === 'favorites'}
            onClick={() => handleTabClick('favorites')}
            rightRadius
          >
            Favorites
          </Tab>
        </TabsWrapper>
        {activeTab === 'bookings' ? (
          <>
            <StyledTitle mb="24px">Bookings history</StyledTitle>
            <BookingsWrapper>
              {ordersData.items.map((item) => (
                <AccountCard key={item.id} data={item} user={data} />
              ))}
              <AccountPagination>
                <Stack spacing={2}>
                  <Pagination
                    count={ordersData.pages}
                    defaultPage={1}
                    siblingCount={2}
                    boundaryCount={1}
                    shape="rounded"
                    page={page}
                    onChange={handlePageChange}
                  />
                </Stack>
              </AccountPagination>
            </BookingsWrapper>
          </>
        ) : (
          <BookingsWrapper>
            {/* <AccountCard isFavorites />
            <AccountCard isFavorites />
            <AccountCard isFavorites />
            <AccountCard isFavorites />
            <AccountCard isFavorites /> */}
          </BookingsWrapper>
        )}
      </AccountWrapper>
    </AccountStyled>
  );
};
