import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-10 text-red-600">
          <h2>Terjadi kesalahan saat memuat halaman.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;