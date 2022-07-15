import { BookList } from '../components/BookList'
import { BookForm } from '../components/BookForm'
import { useCollection } from '../hooks/useCollection';

export const Home = () => {
  const { documents: books } = useCollection('books')

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
