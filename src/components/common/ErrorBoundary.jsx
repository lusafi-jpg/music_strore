import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Here you could send error to logging service
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center px-6" role="alert">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle size={32} className="text-red-400" />
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl font-bold text-white">Oops ! Quelque chose s'est mal passé</h1>
              <p className="text-slate-400 leading-relaxed">
                Une erreur inattendue s'est produite. Nos équipes ont été notifiées.
                Veuillez réessayer ou revenir plus tard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-secondary transition-colors"
              >
                <RefreshCw size={18} />
                <span>Réessayer</span>
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-xl font-medium hover:bg-white/5 transition-colors"
              >
                Retour à l'accueil
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <summary className="text-slate-300 cursor-pointer font-medium mb-2">
                  Détails de l'erreur (développement)
                </summary>
                <pre className="text-xs text-red-300 overflow-auto whitespace-pre-wrap">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
