class Education {
  constructor(school, location, study, startDate, endDate = "Present") {
    this.school = school;
    this.location = location;
    this.study = study;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default Education;
