import * as fs from 'fs';
import { configModel } from './model/config-model';


export async function readJsonFile(filePath: string): Promise<configModel> {
    try {
      // Read the JSON file asynchronously
      const data: Buffer = await fs.promises.readFile(filePath);
  
      // Parse the JSON data into a JavaScript object
      const jsonData: any = JSON.parse(data.toString());
  
      // Now you can work with the JSON data as a JavaScript object
      console.log(jsonData);

      return jsonData;
    } catch (error) {
      console.error('Error reading JSON file:', error);
      
      return error;
    }
  }
  
  export async function readFromFile(filePath: string): Promise<string> {
    try {
      // Read the file asynchronously
      const data: string = await fs.promises.readFile(filePath, 'utf-8');
  
      return data;
    } catch (error) {
      console.error('Error reading from file:', error);
      
      throw error;
    }

  }