---
### 🌲 브랜치 전략

- 브랜치는 **기능 단위 + 컴포넌트 이름** 기준으로 생성
- 네이밍: `feature/<component-name>`
  예시:
  `feature/header`
  `feature/attendance`


- 모든 기능 개발은 Pull Request로 병합
- PR 제목과 커밋 메시지에 Gitmoji 사용


### 🧾 네이밍 컨벤션

| 항목 | 예시 | 규칙 |
|------|------|------|
| 컴포넌트 | `Header.jsx` | **PascalCase** |
| 함수/변수 | `handleLogin`, `userInfo` | **camelCase** |
| 커스텀 훅 | `useUserData()` | **camelCase** |
| 이미지 파일 | `logo.svg` | **kebab-case** |
| 스타일 파일 | `globalStyle.js` | **camelCase** or **kebab-case** |


### 🧩 Gitmoji 사용 규칙

| 이모지 | 용도 |
|--------|------|
| ✨ `:sparkles:` | 새로운 기능 추가 |
| 🐛 `:bug:` | 버그 수정 |
| 💄 `:lipstick:` | UI 스타일 수정 |
| ♻️ `:recycle:` | 리팩토링 |
| 📝 `:memo:` | 문서 수정 |
| 🔧 `:wrench:` | 설정 변경 |
| ✅ `:white_check_mark:` | 테스트 추가 |
| 🚚 `:truck:` | 파일 이동 |
| 🔥 `:fire:` | 코드/파일 삭제 |

