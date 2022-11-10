import React from 'react';

import PropTypes from 'prop-types';

import { Title, SectionTitleWrapper } from './SectionTitle.styled';

export const SectionTitle = ({ title, children }) => (
  <SectionTitleWrapper>
    <Title>{title}</Title>
    {children}
  </SectionTitleWrapper>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
