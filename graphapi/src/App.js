import './App.css';
import { graphql } from "@octokit/graphql";
import { useEffect, useState } from 'react';

let token = `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`



async function Graphrepo  (){
    const { repository, viewer } = await graphqlWithAuth(
      `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first : 3) {
            edges {
              node {
                id
                title
                createdAt
                url
                author {
                  login
                  avatarUrl
                }
             }
            }
          }
        }
        viewer {
          login 
        }
      }
      `
    );
    return {repository,viewer}
}
  
function App() {
  const [repository, setRpository] = useState({});
  const [viewer, setViewer] = useState({})

  useEffect(()=>{
    Graphrepo()
    .then((data)=>{ 
      setRpository(data.repository)
      setViewer(data.viewer)
    })
    .catch((error)=>{
      console.log(Error, error)
    }) 
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <button >콘솔</button>
      </header>
    </div>
  );
}

export default App;
