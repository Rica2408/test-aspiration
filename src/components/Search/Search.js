import { Box, Button, CircularProgress, TextField } from "@mui/material"
import TopicIcon from '@mui/icons-material/Topic';
import { useQuery } from "@apollo/client";
import { GET_TOPIC } from "../../queries/getTopic";
import { useState } from "react";
import { useStyles } from "./styles";

const Search = () => {
  const classes = useStyles()
  const [topicSelected, setTopicSelected] = useState('')
  const [search, setSearch] = useState('')
  const [topic, setTopic] = useState('react')

  const {loading, error,  data } = useQuery(GET_TOPIC, {
    variables: {
      topic
    }
  })
  console.log('data', data)
  
  return(
    <Box className={classes.container}>
      <Box className={classes.containerSearch}>
        <TextField
          label="Topic"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button disabled={search === ''} onClick={() => setTopic(search)}>Search</Button>
      </Box>
      <Box>
        {loading ? 
          <CircularProgress className={classes.circularProgress} /> :
          error ? 
            <Box>
              <h1>We have some problems, try later</h1>
            </Box> 
            :          
          <Box>
            {data.topic.relatedTopics.length ? <h1>Related Topic</h1> : <h1>We don't find any informaction with this topic</h1>}
            {data.topic.relatedTopics.map((realtedTopic, index) => (
              <Box key={index} className={classes.topic}>
                <Box style={{display: 'flex'}}>
                  <TopicIcon />
                  <Box onClick={() => setTopicSelected(realtedTopic.name)}>
                    {realtedTopic.name} - Stars: {realtedTopic.stargazers.totalCount}
                  </Box>
                </Box>
                {topicSelected === realtedTopic.name ? 
                  <Box style={{marginBottom: 10}}>
                    <h3>Related topics</h3>
                    {realtedTopic.relatedTopics.map((itemRelated, indexRelated) => (
                      <Box key={indexRelated} className={classes.relatedTopicDetail}>
                        {itemRelated.name} - Stars: {itemRelated.stargazers.totalCount}
                      </Box>
                    ))}

                  </Box>
                : ''}
              </Box>
            ))}
          </Box>
        }
      </Box>
    </Box>
  )
}

export default Search