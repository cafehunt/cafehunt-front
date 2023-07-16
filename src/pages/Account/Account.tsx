/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  EditButton,
} from './Account.styled';
import { useUserData } from '../../hooks/useUserData';
import { useOrdersList } from '../../hooks/useOrdersList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { logOut } from '../../api/logOut';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../routes/Routes';
import { Loader } from '../../components/Loader';
import { AiOutlineCheck } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { UserNameFormValues } from '../../types/UserNameFormValues';
import { EditNameSchema } from '../../schemas/EditName.schema';

export const Account: FC = () => {
  const token = localStorage.getItem('accessToken') || '';
  const [data] = useUserData(token || '');
  const [page, setPage] = useState(1);

  const fullName = `${data.first_name} ${data.last_name}`;

  const [showOptions, setShowOptions] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('bookings');
  const [userName, setUserName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [ordersData, ordersStatus] = useOrdersList(token || '', page);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UserNameFormValues>({
    resolver: yupResolver(EditNameSchema),
    mode: 'onBlur',
  });

  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChangeNameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleIconClick = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = async () => {
    await logOut(token);

    navigate(appRoutes.home);
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setUserName(fullName);
  }, [fullName]);

  console.log('User name:', userName);

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
                  {!isEditing ? (
                    <>
                      <StyledTitle fs="40px" fw="700" lnh="120%">
                        {userName}
                      </StyledTitle>
                      <EditButton type="button" onClick={handleEditClick}>
                        <PencilImage src={pencilIcon} alt="Pencil" />
                      </EditButton>
                    </>
                  ) : (
                    <form action="" onSubmit={handleChangeNameSubmit}>
                      <Input
                        type="text"
                        controled={true}
                        name="userName"
                        register={register('userName')}
                        errors={errors}
                      />
                      <button type="submit" disabled={!isValid || isSubmitting}>
                        <AiOutlineCheck />
                      </button>
                      <button type="button" onClick={handleCancelClick}>
                        <GrClose />
                      </button>
                    </form>
                  )}
                </FlexContainer>
                <Container>
                  <MoreImage
                    src={moreIcon}
                    alt="more"
                    onClick={handleIconClick}
                  />
                  {showOptions && (
                    <OptionsContainer>
                      {/* <Option onClick={handleDeleteAccount}>
                        <DeleteImage src={deleteIcon} alt="Delete" />
                        Delete account
                      </Option> */}
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
                      disabled
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
              {ordersStatus === 'loading' ? (
                <Loader />
              ) : (
                ordersData.items.map((item) => (
                  <AccountCard key={item.id} data={item} user={data} />
                ))
              )}
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
