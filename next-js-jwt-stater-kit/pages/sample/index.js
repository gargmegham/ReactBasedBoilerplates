import React from 'react';
import asyncComponent from '../../util/asyncComponent'

const Sample = asyncComponent(() => import('../../routes/Sample'));

const SamplePage = () => <Sample/>;

export default SamplePage;
