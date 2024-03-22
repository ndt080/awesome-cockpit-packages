import type { UserScript } from '@entities/userScript';
import { ImplementsStatic, type Mapper } from '@processes/mapping';
import { nanoid } from 'nanoid';

@ImplementsStatic<Mapper<Partial<UserScript>, UserScript>>()
export class UserScriptMapper {
  static mapMany(items: Partial<UserScript>[]): UserScript[] {
    return items.map(UserScriptMapper.map);
  }

  static map(data: Partial<UserScript>): UserScript {
    return {
      id: nanoid(),
      name: data.name || 'unknown',
      command: data.command || '',
      withSuperuser: Boolean(data.withSuperuser),
    };
  }
}
