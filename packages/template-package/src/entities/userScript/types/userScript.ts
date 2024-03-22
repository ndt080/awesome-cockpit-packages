interface UserScript {
  id: string;
  name: string;
  command: string;
  withSuperuser: boolean;
}

export type { UserScript };
