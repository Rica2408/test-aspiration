import { gql } from "@apollo/client";

export const GET_TOPIC = gql`
  query getTopic($topic: String = "react") {
    topic(name: $topic) {
      name,
      relatedTopics(first: 3){
        name,
        repositories {
          totalCount
        },
        relatedTopics {
          name,
          stargazers {
            totalCount
          }
        }
        stargazers {
          totalCount
        }
      }
    }
  }
`