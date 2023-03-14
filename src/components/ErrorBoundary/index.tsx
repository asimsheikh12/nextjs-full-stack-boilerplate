import { Box, Container } from '@mui/material';
import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

import { HasError } from '../500';

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state: IErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line class-methods-use-this
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container maxWidth="lg">
          <Box
            className="flex flex-col place-content-center place-items-center"
            p={5}
            gap={2}
          >
            <HasError />
          </Box>
        </Container>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
