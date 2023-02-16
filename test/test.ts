import { exit } from "process";
import { AppDataSource } from "../src/data-source";
import { dataSet01 } from "./case/dataSet01";
import { dataSet02 } from "./case/dataSet02";
import { dataSet03 } from "./case/dataSet03";
import { dataSet04 } from "./case/dataSet04";
import { dataSet05 } from "./case/dataSet05";
import { dataSet06 } from "./case/dataSet06";
import { dataSet07 } from "./case/dataSet07";
import { dataSet08 } from "./case/dataSet08";
// import { dataSet09 } from "./case/dataSet09";
import { check } from "./util";

AppDataSource.initialize().then(async () => {

  await check(AppDataSource.manager, dataSet01);
  await check(AppDataSource.manager, dataSet02);
  await check(AppDataSource.manager, dataSet03);
  await check(AppDataSource.manager, dataSet04);
  await check(AppDataSource.manager, dataSet05);
  await check(AppDataSource.manager, dataSet06);
  await check(AppDataSource.manager, dataSet07);
  await check(AppDataSource.manager, dataSet08);
  // await check(AppDataSource.manager, dataSet09);

  exit(0);
}).catch(error => console.log(error))
