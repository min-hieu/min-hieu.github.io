import * as React from 'react';
import { Layout } from '/src/components/Layout.jsx';

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
