import { NestFactory } from '@nestjs/core'
import { UserModule } from './app.module'
import 'dotenv/config'

async function bootstrap() {
    const app = await NestFactory.create(UserModule)
    await app.listen(3000)
}
bootstrap()
