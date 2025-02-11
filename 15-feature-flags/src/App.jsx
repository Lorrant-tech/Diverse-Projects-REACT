import FeatureFlags from ".."
import FeatureFlagGlobalState from "../Context"


function App() {

  return (
    <>
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </>
  )
}

export default App
