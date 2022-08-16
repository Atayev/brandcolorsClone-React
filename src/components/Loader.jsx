import ContentLoader from "react-content-loader"

function Loader() {
  return (
    <ContentLoader 
    speed={2}
    width={400}
    height={100}
    viewBox="0 0 400 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
 
  >
    <rect x="15" y="28" rx="3" ry="3" width="88" height="10" /> 
    <rect x="15" y="70" rx="0" ry="0" width="93" height="25" /> 
    <rect x="112" y="70" rx="0" ry="0" width="93" height="25" /> 
    <rect x="208" y="69" rx="0" ry="0" width="93" height="25" />
  </ContentLoader>
      ) 
    
}

export default Loader