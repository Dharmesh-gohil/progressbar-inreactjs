import { useState } from "react"

const Progressbar = () => {
    const [progress, setProgress] = useState(0)
    const handleButtonProgressClick = () => { 
        if (progress < 100) { 
            setProgress(progress+20)
        }
    }
    const handleButtonProgressReset = () => { 
        setProgress(0)
    }
    const getColor = () => { 
        if (progress < 20) {
            return "#ff0000"
        } else if (progress < 40) {
            return "#ffa500"
        } else if (progress < 60) {
            return "#2ecc71"
        } else if (progress < 80) {
            return "purple"
        } else if (progress < 100) {
            return "blue"
        } else { 
            return "yellow"
        }

            

    }
  return (
      <div className="container">
          <div className="progress-bar">
              <div className="progress-bar-fill" style={{width:`${progress}%`, backgroundColor:getColor()}}></div>
        </div>
          <div className="progress-label">{ progress}%</div>
          <button onClick={handleButtonProgressClick}>Progress</button>
          <button onClick={handleButtonProgressReset}>Reset</button>
    </div>
  )
}
export default Progressbar