import { Constants } from "./constants";
const randomValue = Math.floor(Math.random() * 900001);
export class TestData extends Constants {
    name = `campus ${randomValue}`;
    country = "Germany";
    city = "Berlin";
    street = "Bernstein Germany Berlin";
    timeZone = "(GMT -05:00) Eastern Time (US & Canada)";
    berlinLatitude = "52.5200° N, 13.4050° E";
    days = ["Monday","Tuesday","Wednesday","Thursday"];
}
export default new TestData();
