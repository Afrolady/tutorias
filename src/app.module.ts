// ...existing code...
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// ...existing code...

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('MYSQL_HOST', 'localhost'),
        port: Number(config.get<string>('MYSQL_PORT', '3306')),
        username: config.get<string>('MYSQL_USER', 'root'),
        password: config.get<string>('MYSQL_PASSWORD', ''),
        database: config.get<string>('MYSQL_DATABASE', 'proyecto_db'),
        autoLoadEntities: true,
        synchronize: true, // desactivar en producción
      }),
    }),
    // ...other modules...
  ],
  // ...existing code...
})
export class AppModule {}
// ...existing code...