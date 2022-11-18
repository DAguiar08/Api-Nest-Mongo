import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { EmployeeModule } from './app/Modules/employee.module'
import { config } from 'dotenv'

config()

@Module({
    imports: [
        MongooseModule.forRoot(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.etixs0l.mongodb.net/test`
        ),
        EmployeeModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
            ignoreEnvFile: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class UserModule {}
