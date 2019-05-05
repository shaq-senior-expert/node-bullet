import { Container } from 'typedi';
import MailerService from '../services/mailer';

export default class EmailSequenceJob {

  public async handler(job, done): Promise<void> {
    console.log('✌️ Email Sequence Job triggered!');
    try {
      const { email, name }: { [key: string]: string } = job.data;
      const mailerServiceInstance = Container.get(MailerService);
      await mailerServiceInstance.StartEmailSequence(email, name as any); // Here you are passing name but in the function you spect user
      done();
    } catch (e) {
      console.log('🔥 Error with Email Sequence Job');
      console.log(e);
      done(e);
    }
  }
}

