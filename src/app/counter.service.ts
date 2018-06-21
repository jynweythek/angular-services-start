export class CounterService {
  actionNumber = 0;

  countActions() {
    ++this.actionNumber;
    console.log(this.actionNumber);
  }
}
