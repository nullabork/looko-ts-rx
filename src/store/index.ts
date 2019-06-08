import { UserInterfaceStore } from "./UserInterfaceStore";
import { AccessKeyStore } from './AccessKeyStore';
import { AccountStore } from './AccountStore';
import { WorkspaceStore } from './WorkspaceStore';
import { ResultStore } from './ResultStore';

export const stores = {
  userInterfaceStore: new UserInterfaceStore(),
  accessKeyStore: new AccessKeyStore(),
  accountStore: new AccountStore(),
  workspaceStore: new WorkspaceStore()
}

export const resultStores = new Map<string, ResultStore>();