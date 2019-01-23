 var type_check_v2 = (value, args) => {
  if (!args.type && !args.value && !args.enum) {
      return false;
  }
  if (args.enum) {
      return args.enum.indexOf(value) !== -1;
  }
  if (args.type && !args.value) {
      return args.type === typeof value;
  }
  if (!args.type && args.value) {
      return args.value === value;
  }
  if (args.type && args.value) {
      return args.type === typeof value && args.value === value;
  }
  return true;
};