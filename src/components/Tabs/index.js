import './index.css'

const Tabs = props => {
  const {key, details, activeTab, click} = props
  const {tabId, displayText} = details

  const onClickTab = () => {
    click(tabId)
  }

  const classNam = activeTab ? 'activeTab' : ''

  return (
    <li key={key}>
      <div>
        <button
          className={classNam}
          type="button"
          data-testid={tabId}
          onClick={onClickTab}
        >
          {displayText}
        </button>
      </div>
    </li>
  )
}

export default Tabs
