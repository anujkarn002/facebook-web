import { Box, Button, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import MyButton from '@/components/MyButton/MyButton';
import ImageContainer from '@/containers/ImageContainer';
import Title from '@/stories/Title/Title';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - Social</title>
      </Head>
      <Container maxWidth='xl'>
        <Box>
          <Typography variant='h1' textAlign='center'>
            Welcome to
          </Typography>

          <ImageContainer />

          <Typography variant='h4' textAlign='center'>
            Login
          </Typography>
        </Box>
        <Box mt={2} gap={2}>
          <Button variant='contained'>MUI Button</Button>
          <Button variant='dashed'>MUI Button Dashed</Button>
          <MyButton />
          <Link href='/' passHref>
            <Button variant='contained'>Go to Home</Button>
          </Link>
        </Box>

        <Box>
          <Title variant='h4'>Helo From Storybook MUI</Title>
        </Box>
      </Container>
    </>
  );
};

export default Home;
