import React from 'react';
import Layout from '../components/layout/layout';
import 'styles/animations.scss';
import 'styles/global.scss';
import Nav from '../components/layout/Nav/Nav';
import Close from '../components/layout/Close/Close';

interface IProps {
  element: any;
  props: any;
}

const CustomLayout = ({ element, props }: IProps) => {
  return (
    <Layout {...props}>
      {element}
      <Nav />
      {props.path.includes('work') && <Close />}
    </Layout>
  );
};

export default CustomLayout;
