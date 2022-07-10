import { render } from '@testing-library/react';
import React from 'react'
import './input.css'; // Tell webpack that Button.js uses these styles
import Router from './Router';

render(<Router/>, document.getElementById('root'));