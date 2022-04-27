-- insert category data
INSERT INTO categories(name)
VALUES
("IT"),
("미분류")
;

-- insert keyword data
INSERT INTO keywords (name, category_id, is_main)
VALUES
('지구한바퀴 세계여행',  '2',  TRUE),
('그림·웹툰',  '2',  TRUE),
('시사·이슈',  '2',  TRUE),
('IT트렌드',  '1',  TRUE),
('인공지능',  '1',  FALSE),
('UX',  '1',  FALSE),
('인스타그램',  '1',  FALSE),
('스마트폰',  '1',  FALSE),
('안드로이드',  '1',  FALSE),
('페이스북',  '1',  FALSE),
('애플',  '1',  FALSE),
('구글',  '1',  FALSE),
('아이폰',  '1',  FALSE),
('아이패드',  '1',  FALSE),
('VR',  '1',  FALSE),
('모바일',  '1',  FALSE),
('사진·촬영',  '2',  TRUE),
('취향저격 영화 리뷰',  '2',  TRUE),
('오늘은 이런 책',  '2',  TRUE),
('뮤직인사이드',  '2',  TRUE),
('글쓰기 코치',  '2',  TRUE),
('직장인 현실 조언',  '2',  TRUE),
('스타트업 경험담',  '2',  TRUE),
('육아 이야기',  '2',  TRUE),
('요리·레시피',  '2',  TRUE),
('건강·운동',  '2',  TRUE),
('멘탈 관리 심리 탐구',  '2',  TRUE),
('디자인스토리',  '2',  TRUE),
('문화·예술',  '2',  TRUE),
('건축·설계',  '2',  TRUE),
('인문학·철학',  '2',  TRUE),
('쉽게 읽는 역사',  '2',  TRUE),
('우리집 반려동물',  '2',  TRUE),
('멋진 캘리그래피',  '2',  TRUE),
('사랑·이별',  '2',  TRUE),
('감성에세이',  '2',  TRUE)
;

-- insert user data
INSERT INTO users (kakao_id, nickname, profile_img_url, is_author, description)
VALUES
("12345", "hansol", "", 1, "hello, world")
;

-- insert post data
INSERT INTO posts (title, body, summary, subtitle, user_id, is_published, thumbnail_url)
VALUES
("칠레 산티아고 (3) 과거와 이별 aka. 안전 이별"
, "핸드폰을 잃고 나는 쓴다 | 핸드폰을 잃어버렸다. 정확히 말하면 도난당했다. 손 끝하나 건드리지 않고 오토바이를 탄 범인이 내 손에서 핸드폰을 가져갔다. 내가 남미에 있었구나 처음 알았다."
, "핸드폰을 잃고 나는 쓴다"
, "아프다고 말하지 않아요."
, 1
, 1
, "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png")
;

-- insert book data
INSERT INTO books (title, description, user_id, bookcover_url)
VALUES ("예술하는 척"
, "2021년 12월 동안 여섯 명의 작은 아티스트들이 모여서 만들게 된 작은 책"
, 1
, "https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
;

-- insert book_post data
INSERT INTO book_posts (post_id, book_id, sequence)
VALUES
(1, 1, 1)
;

-- insert user_keyword data
INSERT INTO user_keywords (user_id, keyword_id)
VALUES
(1, 2)
;
