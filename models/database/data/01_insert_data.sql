-- insert category data
INSERT INTO categories(name)
VALUES
("역사"),
("영화"),
("여행"),
("글쓰기")
;

-- insert keyword data
INSERT INTO keywords(name, category_id, is_main)
VALUES
("스마트폰", 1, false),
("인공지능", 1, false),
("UX", 1, false),
("구글", 1, false)
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
(2, 1, 1)
;

-- insert user_keyword data
INSERT INTO user_keywords (user_id, keyword_id)
VALUES
(1, 2)
;

-- insert post_keyword data
INSERT INTO post_keywords (post_id, keyword_id)
VALUES
(2, 2)
;