import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  container: {
    marginTop: 20
  },
  containerSearch: {
    display: 'flex',
    alignItems: 'center'
  },
  circularProgress: {
    marginTop: 10
  },
  topic: {
    display: 'flex', 
    flexDirection: 'column'
  },
  containerRelatedTopic: {
    marginBottom: 10
  },
  relatedTopicDetail: {
    display: 'flex', 
    flexDirection: 'column', 
    marginLeft: 15
  }
})