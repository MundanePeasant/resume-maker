export default class Experience {
  constructor(
    company,
    title,
    location,
    startDate,
    endDate = "Present",
    bullets
  ) {
    this.company = company;
    this.location = location;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.bullets = bullets;
    this.id = school + startDate + endDate;
  }
}
