/* istanbul ignore file */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { Expose, plainToClass, Exclude } from 'class-transformer';

class Rule {
  @Exclude()
  id!: string;

  @Exclude()
  valueSource!: string;

  @Expose()
  field!: string;

  @Expose()
  value!: string;

  @Expose()
  operator!: string;

  @Expose()
  rules!: [Rule];

  @Expose()
  combinator!: string;

  @Expose()
  not!: boolean;
}

class RuleSet {
  @Expose()
  rules!: [Rule];
  @Expose()
  combinator!: string;
  @Expose()
  not!: boolean;
}

export default RuleSet;
