import './index.css'

const MatchItem = props => {
  const {key, details, checkImg} = props

  const {id, thumbnailUrl, category} = details

  const onCheckImg = () => {
    checkImg(id)
  }

  return (
    <li key={key}>
      <div>
        <button
          data-testid={id}
          type="button"
          className="btn"
          onClick={onCheckImg}
        >
          <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
        </button>
      </div>
    </li>
  )
}

export default MatchItem
