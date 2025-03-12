

export abstract class RegisterService {
  abstract create(id: string, data:any): Promise<void>;
}
