"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-2xl border border-dashed border-border py-12 text-center">
            <p className="text-2xl mb-2">⚠️</p>
            <p className="text-ink-muted font-medium">Algo salió mal.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 rounded-xl bg-brand px-5 py-2 font-mono text-sm text-white transition-all hover:bg-brand-soft"
            >
              Reintentar
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
