import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import RootLayout from './layout';
import Header from './ui/components/header/header';
import styles from './container.module.scss';

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <main className={styles.container}>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </main>
    </RootLayout>
  );
}
