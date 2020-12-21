import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root method Hello World', () => {
    it('should return GET "Hello World!"', () => {
      expect(appController.getHello()).toBe('GET Hello World!');
    });
    it('should return POST "Hello World!"', () => {
      expect(appController.postHello()).toBe('POST Hello World!');
    });
    it('should return PUT "Hello World!"', () => {
      expect(appController.putHello()).toBe('PUT Hello World!');
    });
    it('should return DELETE "Hello World!"', () => {
      expect(appController.deleteHello()).toBe('DELETE Hello World!');
    });
  });
});
