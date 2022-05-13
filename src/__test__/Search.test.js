import { MockedProvider } from '@apollo/client/testing';
import { GET_TOPIC } from '../queries/getTopic';
import Search from '../components/Search';
import renderer from "react-test-renderer"



it('Run Search Components', async () => {
  const mockGithub = {
    request: {
      query: GET_TOPIC,
      variables: {
        topic: 'React',
      },
    },
    result: {
      data: {
        topic: {
          name: 'React',
          repositories: {
            totalCount: 100
          },
          stargazers: {
            totalCount: 30,
          },
          relatedTopics: [
            {
              name: 'vue',
              stargazers: {
                totalCount: 1000
              }
            }
          ]
        },
      },
    }
  }

  const component = renderer.create(
    <MockedProvider mocks={[mockGithub]} addTypename={false}>
      <Search/>
    </MockedProvider>
  )

  
  const condition = component.root.findByType('label');
    expect(condition).toBeDefined()
});

