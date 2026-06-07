# 추출 결정 사항 (DECISIONS)

원본 사이트: https://inetguru.github.io/pnu_ai/index.html
원본 소스: GitHub `inetguru/pnu_ai` (main, commit 868b085) — 직접 clone로 확보 (크롤링 아님, 누락 없음 보장)
작성일: 2026-06-02

## 합의된 결정

1. **추출 깊이 = 심층 추출**
   - 19개 HTML 페이지의 전체 텍스트를 마크다운으로 변환
   - 23개 이미지(다이어그램/스캔)의 내용·텍스트를 글자로 전사
   - 13개 PDF의 본문 텍스트를 추출
   - 원본 파일(HTML/이미지/PDF)도 전부 보존
   - 원칙: **어떤 형식에도 텍스트가 남김없이 글자로 보존된다.**

2. **저장 위치 = `C:\Users\user\pnu_ai_archive`**

3. **언어 = 원문 한국어 그대로** (번역·요약 없음, 한 글자도 변경하지 않음)

## 폴더 구조

```
pnu_ai_archive/
├─ README.md            전체 색인 + 사이트맵 + 완성도 체크리스트
├─ DECISIONS.md         (이 파일)
├─ pages/               19개 .md — 각 HTML 페이지 전체 텍스트
├─ assets/
│   ├─ image/           23개 원본 이미지 + 각 이미지별 전사 .md
│   └─ pdf/             13개 원본 PDF + 각 PDF 본문 .md
├─ data/                actions-data.json, chart_data_10years.js (원본) + 표 정리
└─ _source/             원본 HTML 클론 전체 (수정 없이 보존)
```

## 원본 인벤토리 (총 57개 파일)

- HTML 19, 이미지 23, PDF 13, 데이터 2
