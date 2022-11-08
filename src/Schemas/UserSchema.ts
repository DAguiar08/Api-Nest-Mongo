import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  FirstName: string;

  @Prop()
  SerName: string;

  @Prop()
  Designation: string;

  @Prop()
  Email: string;

  @Prop()
  Adress: string;

  @Prop()
  Salary: number;

  @Prop()
  Gender: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
