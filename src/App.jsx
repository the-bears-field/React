import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';

export const App = () => {
  return (
    <>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
    </>
  );
}
