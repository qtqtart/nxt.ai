import { Component, ErrorInfo, ReactNode } from "react"

type Props = {
  children: ReactNode
  fallback: ReactNode
}

type State = {
  isError: boolean
}

export class ErrorBoundaryProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      isError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`error::${error}`)
    console.log("___")
    console.log(`errorInfo::${errorInfo}`)
  }

  render() {
    const { isError } = this.state
    const { children, fallback } = this.props

    return isError ? <>{fallback}</> : <>{children}</>
  }
}
