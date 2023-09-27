const getStroedJobApplication = () =>{
  const storedJobApplication = localStorage.getItem('Job-application')
  if(storedJobApplication){
    return JSON.parse(storedJobApplication)
  }
  return [];
}

const saveJobApplication = id => {
  const storedJobApplications = getStroedJobApplication();
  const idInt = parseInt(id)
  const exists = storedJobApplications.find(jobId => jobId=== idInt)
  if(!exists){
    storedJobApplications.push(idInt);
    localStorage.setItem('Job-application', JSON.stringify(storedJobApplications))
  }
}

export {saveJobApplication, getStroedJobApplication}