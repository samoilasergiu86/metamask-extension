import Home from './home.component'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { unconfirmedTransactionsCountSelector } from '../../selectors/confirm-transaction'

const mapStateToProps = state => {
  const { metamask, appState } = state
  const {
    lostAccounts,
    suggestedTokens,
    providerRequests,
    requests,
  } = metamask
  const { forgottenPassword } = appState
  const permissionRequests = requests.permissionsRequests || []

  return {
    lostAccounts,
    forgottenPassword,
    suggestedTokens,
    unconfirmedTransactionsCount: unconfirmedTransactionsCountSelector(state),
    providerRequests,
    permissionRequests,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Home)
