import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: 'John Smith',
  image: 'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b',
  email: 'test@example.com',
  tel: '012-345-6789',
  company: {
    name: 'Unchi株式会社'
  },
  website: 'http://www.example.com'
};

export const App = () => {
  return (
    <>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user}/>
    </>
  );
}
