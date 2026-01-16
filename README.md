# Devtime - 개발자를 위한 타이머 앱

## 기술 스택

- Next.js (App Router)
- Typescript

## 폴더 구조
```
src/
├── app/
│ ├── auth/
│ │ ├── login/
│ │ │ └── page.tsx
│ │ └── signup/
│ │ └── page.tsx
│ │
│ ├── challenge/
│ │ ├── timer/
│ │ │ └── page.tsx
│ │ ├── records/
│ │ │ ├── page.tsx // 활동 목록
│ │ │ └── [id]/page.tsx // 활동 상세
│ │
│ ├── dashboard/
│ │ └── page.tsx
│ │
│ ├── ranking/
│ │ └── page.tsx
│ │
│ ├── mypage/
│ │ ├── page.tsx
│ │ └── edit/page.tsx
│ │
│ └── layout.tsx
│
├── components/
│ ├── common/
│ ├── layout/
│ └── challenge/
│
├── hooks/
├── styles/
├── lib/
└── types/
```
