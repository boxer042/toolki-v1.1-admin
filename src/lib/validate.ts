export function accountValidate({
  name,
  office,
}: {
  name: string;
  office: string;
}) {
  const errors: any = {};

  if (!name) {
    errors.name = '거래처명을 입력해주세요.';
  } else if (name.length < 2) {
    errors.name = '한글자 이상 입력해주세요.';
  }

  if (!office) {
    errors.office = '사무실 전화번호를 입력해주세요.';
  }

  return errors;
}
